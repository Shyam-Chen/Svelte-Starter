import util from 'gulp-util';
import notify from 'gulp-notify';

export class CompileError {
  static handle(err) {
    let self = this;
    if (util.env.type === 'dev') {
      let args = Array.from(arguments);

      notify.onError({
          title: 'Compile Error',
          message: `\r\n${err.message}`
        })
        .apply(this, args);

      self.emit('end');
    } else {
      util.log(`${util.colors.red(err)}`);
      process.exit(1);
    }
  }
}
