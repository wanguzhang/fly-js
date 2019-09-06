/**
 * @author: 张攀钦
 * @date: 2019-06-27 17:56:44 星期四
 * @description: 地图中创建的摄像头的类
 */
class GeoVideo extends THING.factory.classes.GeoPoint {
    // 地图中创建的摄像头，飞向自己方法
    constructor(app) {
        super(app);
        Promise.resolve(this).then(thisArgs => thisArgs.myInit());
    }

    myInit () {
        this.on('click', () => console.log('点击了'));
    }
}
THING.factory.registerClass('GeoVideo', GeoVideo);
