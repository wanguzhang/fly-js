<template>
    <div id="div3D"></div>
</template>

<script>
export default {
    mounted() {
        window.app = new THING.App({ container: 'div3D' });
        window.map = window.app.create({
            type: 'Map',
            backgroundColor: [0, 0, 0],
            atmosphere: false, // 显示/隐藏 大气层 默认显示
            attribution: 'Google',
            style: {
                night: true, // 开启/关闭 白天黑夜效果 默认开启
                fog: false, // 开启/关闭 雾效 默认关闭
            },
        });
        const tileLayer = window.app.create({
            type: 'TileLayer',
            name: 'earthLayer',
            url: 'https://mt0.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}',
        });

        // 向地球添加一个瓦片图图层
        window.map.addLayer(tileLayer);
        const videoLayer = window.app.create({
            type: 'ThingLayer',
            name: 'testThingLayer',
        });
        videoLayer.visible = true;
        window.map.addLayer(videoLayer);
        const video = window.app.create({
            type: 'GeoVideo',
            name: '1111',
            coordinates: [118.1609515299784, 36.74916971372598],
            userData: { name: '111' },
            height: 13,
            renderer: {
                type: 'model',
                // 尺寸
                size: 25,
                url:
          'https://model.3dmomoda.com/models/335472acb6bb468ead21d1a8d9a2d24e/1/gltf',
            },
        });
        video.visible = false;
        videoLayer.add(video);
    },
};
</script>
