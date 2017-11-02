export class StopWatch {
    private started: number = Date.now();
    private stopped?: number;
    public get elpsedTime() {
        return (this.stopped ? this.stopped : Date.now()) - this.started;
    }
    public stop() {
        this.stopped = Date.now();
    }
}