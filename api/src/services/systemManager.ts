// import Cache from '@/services/cache';
import Board from '@/services/board';

export default class SystemManager {

  public board: Board;

  constructor() {
    const boardOptions = {}
    this.board = new Board(boardOptions);
  }
}