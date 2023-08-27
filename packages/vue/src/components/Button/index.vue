<script setup lang="ts">
    import { ButtonProps } from '@lapidist/garnet-types';

    defineProps<ButtonProps>()
</script>

<template>
    <button :type="type">hi</button>
</template>
