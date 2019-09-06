<template>
    <div id="div3D"></div>
</template>

<script>
export default {
    mounted() {
        window.app = new THING.App({
            // 指定 3d 容器 div标签 的id属性值
            container: 'div3D',
            url: 'https://www.thingjs.com/static/models/storehouse',
            enableUseHighestVersionResource: false,
        });

        window.app.on(THING.EventType.Load, (ev) => {
            const videoPro = {
                id: THING.Utils.generateUUID(),
                name: '摄像头',
                parent: ev.campus,
                type: 'Video',
                url:
          'https://model.3dmomoda.com/models/335472acb6bb468ead21d1a8d9a2d24e/1/gltf',
                position: [-5, 0, 7],
                scale: [50, 50, 50],
            };
            const video = window.app.create(videoPro);
            video.changOutLineColor();
            window.app.level.change(ev.campus);
        });
    },
};
</script>
