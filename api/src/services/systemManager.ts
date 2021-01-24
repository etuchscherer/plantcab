// import Cache from '@/services/cache';
import Board from '@/services/board';

export default class SystemManager {

  public board: Board;

  constructor() {
    // super();
    const boardOptions = {}
    this.board = new Board(boardOptions);
    // this.set('main_board', new Board(boardOptions));
  }

  // dumpCache(): unknown {
  //   return super.debug();
  // }
}