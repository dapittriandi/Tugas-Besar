<template>
    <div class="notification is-danger">
        {{ message }}
    </div>
</template>
<script>
export default {
// eslint-disable-next-line vue/multi-word-component-names
name: 'Notification',
// eslint-disable-next-line vue/require-prop-types
props: ['message']
}
</script>