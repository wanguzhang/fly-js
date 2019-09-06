<template>
    <div>
        {{message}}
        <componentA
            :prop1="data"
            :obj="obj"
            :num="num"
            :arr="arr"
            :camel-case="camelCase"
            @changeMessage-emit="parentChangemessage"
        >12345123451</componentA>
        <div>--------------------------------</div>
        <componentA
            prop1="staticData"
            obj="{name:'testName11'}"
            num="22"
            arr="[2,3]"
            camelCase="camelCase"
            @changeMessage-emit="parentChangemessage"
        />
    </div>
</template>

<script>
import componentA from '@/components/Component-A.vue';

export default {
    data() {
        return {
            message: 111,
            data: 'Component1',
            obj: { name: 'testName' },
            arr: [1, 2],
            num: 11,
            camelCase: 'camelCase ',
        };
    },
    created() {
        this.$on('changeMessage-emit', (data) => {
            console.log(data);
        });
    },
    methods: {
        parentChangemessage(data) {
            console.log(data);
            this.message = JSON.stringify(data);
        },
    },
    components: {
        componentA,
    },
};
</script>
