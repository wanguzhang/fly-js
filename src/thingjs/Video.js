import { MessageBox } from 'element-ui';

class Video extends THING.Thing {
    constructor(app = uino.app) {
        // 不传 app 报错。
        super(app);
        Promise.resolve(this).then((data) => { data.mYInit(); });
    }

    // 调用创建对象需要绑定的事件之类的数据
    mYInit() {
        this.on('click', (ev) => {
            console.log('Video.click', ev);
            MessageBox.alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
                dangerouslyUseHTMLString: false,
            });
        });
    }

    changOutLineColor() {
        this.style.color = 'yellow';
    }

    // 触发告警事件
    triggerAlarm(eventData, tag) {
        this.trigger('alarm', eventData, tag);
    }
}
THING.factory.registerClass('Video', Video);
export default Video;
