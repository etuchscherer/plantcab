import Cache from '@/services/cache';
import Board from '@/services/board';

export default class SystemManager extends Cache {

  constructor({ boardOptions }: { boardOptions: RPIO.Options }) {
    super();
    this.set('main_board', new Board(boardOptions));
  }

  dumpCache(): unknown {
    return super.debug();
  }
}