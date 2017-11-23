import { env, log, colors } from 'gulp-util';
import notify from 'gulp-notify';

export class CompileError {
  static handle(...err) {
    const self = this;

    if (!env.prod) {
      notify
        .onError({
          title: 'Compile Error',
          message: `\r\n${err}`
        })
        .apply(this, Array.from(err));

      self.emit('end');
    } else {
      log(`${colors.red(err)}`);
      process.exit(1);
    }
  }
}
