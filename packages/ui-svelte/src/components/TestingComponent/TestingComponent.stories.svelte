<script module>
  import TestingComponent from './TestingComponent.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';

  const { Story } = defineMeta({
    title: 'Example/TestingComponent',
    component: TestingComponent,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
  });
</script>

<Story name="Primary" args={{ count: 0 }} />

<Story name="Secondary" args={{ count: 1 }} />

<Story name="Tertiary" args={{ count: 2 }} />
