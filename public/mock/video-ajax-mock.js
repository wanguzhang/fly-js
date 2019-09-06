/**
 * @author: 张攀钦
 * @description: 电子眼mock数据
 */
$.mockjax({
    url: '/api/videos',
    contentType: 'application/json',
    responseText: Mock.mock({
        data: [
            {
                coordinates: [118.1609515299784, 36.74916971372598],
                type: 'Video',
                modelUrl: './public/point/video',
                id: 'video_1',
                name: '电子眼-1'
            },
            {
                coordinates: [118.16094789012712, 36.74840949597125],
                type: 'Video',
                modelUrl: './public/point/video',
                id: 'video_2',
                name: '电子眼-2'
            },
            {
                coordinates: [118.16171361310877, 36.748640435575574],
                type: 'Video',
                modelUrl: './public/point/video',
                id: 'video_3',
                name: '电子眼-3'
            },
            {
                coordinates: [118.16302842989757, 36.74921603331367],
                type: 'Video',
                modelUrl: './public/point/video',
                name: '电子眼-4',
                id: 'video_4'
            }
        ],
        code: 200
    })
});
/**
 * @author: 陈晖
 * @description: 消防栓mock数据
 */
$.mockjax({
    url: '/api/hydrants',
    contentType: 'application/json',
    responseText: Mock.mock({
        data: [
            {
                coordinates: [118.16311271780012, 36.74862928759913],
                modelUrl:
                    'https://model.3dmomoda.com/models/C3B70F51107C4ED7BC525A8B82D11E7A/0/gltf/',
                id: 'hydrant-1',
                name: '消防栓-1'
            },
            {
                coordinates: [118.1617743545846, 36.74864059546844],
                modelUrl:
                    'https://model.3dmomoda.com/models/C3B70F51107C4ED7BC525A8B82D11E7A/0/gltf/',
                id: 'hydrant-2',
                name: '消防栓-2'
            },
            {
                coordinates: [118.1616726126538, 36.748342276358436],
                modelUrl:
                    'https://model.3dmomoda.com/models/C3B70F51107C4ED7BC525A8B82D11E7A/0/gltf/',
                id: 'hydrant-3',
                name: '消防栓-3'
            },
            {
                coordinates: [118.16099564975133, 36.7483632513611],
                modelUrl:
                    'https://model.3dmomoda.com/models/C3B70F51107C4ED7BC525A8B82D11E7A/0/gltf/',
                id: 'hydrant-4',
                name: '消防栓-4'
            },
            {
                coordinates: [118.1609544465326, 36.74823648017837],
                modelUrl:
                    'https://model.3dmomoda.com/models/C3B70F51107C4ED7BC525A8B82D11E7A/0/gltf/',
                id: 'hydrant-5',
                name: '消防栓-5'
            },
            {
                coordinates: [118.16006481933007, 36.74815598397451],
                modelUrl:
                    'https://model.3dmomoda.com/models/C3B70F51107C4ED7BC525A8B82D11E7A/0/gltf/',
                id: 'hydrant-6',
                name: '消防栓-6'
            },
            {
                coordinates: [118.15925213224503, 36.748062395826565],
                modelUrl:
                    'https://model.3dmomoda.com/models/C3B70F51107C4ED7BC525A8B82D11E7A/0/gltf/',
                id: 'hydrant-7',
                name: '消防栓-7'
            },
            {
                coordinates: [118.15921867531128, 36.749211431134725],
                modelUrl:
                    'https://model.3dmomoda.com/models/C3B70F51107C4ED7BC525A8B82D11E7A/0/gltf/',
                id: 'hydrant-8',
                name: '消防栓-8'
            },
            {
                coordinates: [118.16010080953319, 36.74920736854072],
                modelUrl:
                    'https://model.3dmomoda.com/models/C3B70F51107C4ED7BC525A8B82D11E7A/0/gltf/',
                id: 'hydrant-9',
                name: '消防栓-9'
            },
            {
                coordinates: [118.16099206739013, 36.74918727901785],
                modelUrl:
                    'https://model.3dmomoda.com/models/C3B70F51107C4ED7BC525A8B82D11E7A/0/gltf/',
                id: 'hydrant-10',
                name: '消防栓-10'
            }
        ],
        code: 200
    })
});
/**
 * @author: 陈晖
 * @description: 区域数据模拟
 */
$.mockjax({
    url: '/api/grids',
    contentType: 'application/json',
    responseText: Mock.mock({
        data: [
            {
                coordinates: [
                    [
                        [118.15830231813962, 36.747852004288276],
                        [118.15832086787225, 36.74923468042297],
                        [118.1608356809637, 36.749232456450464],
                        [118.16082624398238, 36.74828270593317]
                    ]
                ],
                color: [0, 255, 0],
                id: 'grid-A',
                name: '区域A'
            },
            {
                coordinates: [
                    [
                        [118.16172536658155, 36.74867174008975],
                        [118.16168588663882, 36.74939506944559],
                        [118.16449878957019, 36.749353624595315],
                        [118.16440874757578, 36.74863188963898]
                    ]
                ],
                color: [255, 0, 0],
                id: 'grid-B',
                name: '区域B'
            },
            {
                coordinates: [
                    [
                        [118.1591035710268, 36.749515776405644],
                        [118.15914390983298, 36.75001876271724],
                        [118.16143795748744, 36.74996863815164],
                        [118.16150726990395, 36.7502016269303],
                        [118.16407769883946, 36.75018288464531],
                        [118.16407589246164, 36.74945364311631]
                    ]
                ],
                color: [0, 0, 255],
                id: 'grid-C',
                name: '区域C'
            },
            {
                coordinates: [
                    [
                        [118.15799893548024, 36.74849338357488],
                        [118.1579430013426, 36.74790023431845],
                        [118.15617244419231, 36.74791424590085],
                        [118.15620147173846, 36.748565332790164]
                    ]
                ],
                color: [255, 255, 0],
                id: 'grid-D',
                name: '区域D'
            }
        ],
        code: 200
    })
});
/**
 * @author: 陈晖
 * @description: 区域名称面板
 */
$.mockjax({
    url: '/api/nameBrands',
    contentType: 'application/json',
    responseText: Mock.mock({
        data: [
            {
                coordinates: [118.15953555739696, 36.74870101795607],
                id: 'brand-A',
                name: '区域A'
            },
            {
                coordinates: [118.16297424355923, 36.74897942348336],
                id: 'brand-B',
                name: '区域B'
            },
            {
                coordinates: [118.16175464030658, 36.749861960843745],
                id: 'brand-C',
                name: '区域C'
            },
            {
                coordinates: [118.15716107381292, 36.748193135823186],
                id: 'brand-D',
                name: '区域D'
            }
        ],
        code: 200
    })
});
