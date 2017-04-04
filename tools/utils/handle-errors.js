import { env, log, colors } from 'gulp-util';
import notify from 'gulp-notify';

export class CompileError {
  static handle(err) {
    let self = this;

    if (env.mode === 'dev') {
      let args = Array.from(arguments);

      notify.onError({
          title: 'Compile Error',
          message: `\r\n${err.message}`
        })
        .apply(this, args);

      self.emit('end');
    } else {
      log(`${colors.red(err)}`);
      process.exit(1);
    }
  }
}
