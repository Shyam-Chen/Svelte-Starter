// @flow

import page from 'page';
import { template as _ } from 'lodash';
import { observable, autorun } from 'mobx';
import { scaleOrdinal, arc, pie, select } from 'd3';
// import { PerspectiveCamera, Scene, BoxGeometry, MeshBasicMaterial, Mesh, WebGLRenderer } from 'three';

import { $ } from '~/utils';

import template from './data-chart.html';
import style from './data-chart.css';

const pathname = '/data-chart';

export const store = observable({});

export const render = (route: string) =>
  autorun((): void => {
    $('#app').innerHTML = _(template, { imports: { style } })({ store, route });

    // -

    const data = [27, 38, 74];

    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    const color = scaleOrdinal()
      .range(['#E91E63', '#9C27B0', '#2196F3']);

    const _arc = arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    const labelArc = arc()
      .outerRadius(radius - 40)
      .innerRadius(radius - 40);

    const _pie = pie()
      .sort(null)
      .value(d => d);

    const svg = select('#pie')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const g = svg
      .selectAll('.arc')
      .data(_pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    g.append('path')
      .attr('d', _arc)
      .style('fill', d => color(d.data));

    g.append('text')
      .attr('transform', d => `translate(${labelArc.centroid(d)})`)
      .attr('dy', '.35em')
      .text(d => d.data);

    // -

    // let [camera, scene, renderer, geometry, material, mesh] = [];
    //
    // const init = () => {
    //   camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    //   camera.position.z = 1000;
    //
    //   scene = new Scene();
    //
    //   geometry = new BoxGeometry(200, 200, 200);
    //   material = new MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    //
    //   mesh = new Mesh(geometry, material);
    //   scene.add(mesh);
    //
    //   renderer = new WebGLRenderer();
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    //
    //   $('#box').appendChild(renderer.domElement);
    // };
    //
    // const animate = () => {
    //   requestAnimationFrame(animate);
    //
    //   mesh.rotation.x += 0.01;
    //   mesh.rotation.y += 0.02;
    //
    //   renderer.render(scene, camera);
    // };
    //
    // init();
    // animate();
  });

export default (parent: string): void => {
  const route = parent + pathname;

  page(route, (): void => render(route));
};
