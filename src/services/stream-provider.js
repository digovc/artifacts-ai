import { Subject } from "rxjs";

class StreamProvider {
  onStart$ = new Subject()
  onEnd$ = new Subject()
  onData$ = new Subject()
}

export default new StreamProvider()
