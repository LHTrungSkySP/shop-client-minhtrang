import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'lht-countdown-timer',
    templateUrl: './countdown-timer.component.html',
    styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
    //#region field
    @Input() showHour = true;
    @Input() allowChange = false;
    @Input() standbyTimer = false;
    @Input() flipTimer = false;
    @Input() isBorder = true;
    @Input() IdTimer: any = null;
    @Output() editComplete = new EventEmitter<number>();
    showCustomValue = false;
    customValue: string | undefined;
    setCustomTime() {
        let values = this.customValue?.split(":");
        if (values) {
            if (this.showHour) {
                this.hourView = values[0] !== undefined ? parseInt(values[0]) : 0;
                this.minuteView = values[1] !== undefined ? parseInt(values[1]) : 0;
                this.secondView = values[2] !== undefined ? parseInt(values[2]) : 0;
                this.startCount = this.hourView * 3600 + this.minuteView * 60 + this.secondView;
            }
            else if (this.showHour === false) {
                this.minuteView = values[0] !== undefined ? parseInt(values[0]) : 0;
                this.secondView = values[1] !== undefined ? parseInt(values[1]) : 0;
                this.startCount = this.minuteView * 60 + this.secondView;
            }
        }
        this.showCustomValue = false;
        this.editComplete.emit(this.startCount);
    }
    onShowCustom() {
        if (this.allowChange) {
            this.showCustomValue = true;
            if (this.showHour) {
                this.customValue = this.hourView + ':' + this.minuteView + ':' + this.secondView;
            }
            else {
                this.customValue = this.minuteView + ':' + this.secondView;
            }
        }
    }
    @Input() classContent = 'font-medium text-6xl';
    /**
     * start countDown - second
     */
    _startCount!: number;
    @Input() set startCount(value: number) {
        if (this._startCount !== value) {
            this._startCount = value;
            if (!this.isFirst) {
                this.updateTimer(this.startCount);
            }
        }
    }
    get startCount() {
        return this._startCount;
    }
    _startCountUp!: number;
    @Input() set startCountUp(value: number) {
        if (this._startCountUp !== value) {
            this._startCountUp = value;
            if (!this.isFirst) {
                this.updateTimerUp(value);
            }
        }
    }
    get startCountUp() {
        return this._startCountUp;
    }
    updateTimerUp(second: number) {
        if (this.showHour) {
            this.hourView = Math.floor(second / 3600);
            let minuteSecond = second - this.hourView * 3600;
            this.minuteView = Math.floor(minuteSecond / 60);
            this.secondView = minuteSecond - this.minuteView * 60;
        }
        else if (this.showHour === false) {
            this.minuteView = Math.floor(second / 60);
            this.secondView = second - this.minuteView * 60;
        }
    }

    interval_Mng: any = null;
    dayView: number = 0;
    hourView: number = 0;
    minuteView: number = 0;
    secondView: number = 0;
    //#endregion

    isFirst = true;
    initComplete(){
        this.startCount = 0;
        this.updateTimer(this.startCount);
        return;
    }
    ngOnInit(): void {
        if(this.startCount <= 0) {
            this.initComplete();
        }
        else {
            this.updateTimer(this.startCount);
        }
        this.isFirst = false;
    }
    onBlur() {
        this.showCustomValue = false;
        this.customValue = this.hourView + ':' + this.minuteView + ':' + this.secondView;
    }

    countTime(value: number = 1) {
        if (this.startCountUp !== undefined) {
            this.startCountUp += value;
            this.updateTimerUp(this.startCountUp);
        } else {
            this.startCount -= value;
            if (this.startCount < 0) {
                this.complete();
            }
        }
    }
    isComplete = false;
    @Output() onComplete = new EventEmitter();
    complete() {
        this.isComplete = true;
        this.onComplete.emit();
    }
    updateTimer(second: number) {
        if (this.showHour) {
            this.dayView = Math.floor(second / 86400);
            let hourSecond = second - this.dayView * 86400;
            this.hourView = Math.floor(hourSecond / 3600);
            let minuteSecond = hourSecond - this.hourView * 3600;
            this.minuteView = Math.floor(minuteSecond / 60);
            this.secondView = minuteSecond - this.minuteView * 60;
        }
        else if (this.showHour === false) {
            this.minuteView = Math.floor(second / 60);
            this.secondView = second - this.minuteView * 60;
        }
    }
}
