import { merge } from 'rxjs/observable/merge';

export const combineEpics = (...epics) => (...args) =>
  merge(
    ...epics.map((epic) => {
      const output$ = epic(...args);
      if (!output$) {
        throw new TypeError(`
          combineEpics: one of the provided Epics
          "${epic.name || '<anonymous>'}" does not return a stream.
          Double check you\'re not missing a return statement!
        `);
      }
      return output$;
    })
  );
