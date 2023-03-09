import { makeAutoObservable } from "mobx";

class DraggingFH {
  draggingActive = false;

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  changeStatusDragging(status: boolean) {
    this.draggingActive = status;
  }
}

const App = new DraggingFH();
export default App;
