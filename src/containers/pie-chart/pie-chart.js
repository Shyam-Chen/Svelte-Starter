import { scaleOrdinal } from 'd3-scale';
import { select } from 'd3-selection';
import { pie } from 'd3-shape';

const svg = select('svg');
const width = +svg.attr('width');
const height = +svg.attr('height');
const radius = Math.min(width, height) / 2;

const color = scaleOrdinal(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);

svg.data(pie({

}));
