<script lang="ts">
import { Drawer as DrawerPrimitive } from 'vaul-svelte';

import { cn } from '$src/utils/utils';

let { ref = $bindable(null), class: className, ...restProps }: DrawerPrimitive.DescriptionProps = $props();
</script>

<DrawerPrimitive.Description
	bind:ref="{ref}"
	class="{cn('text-sm text-muted-foreground', className)}"
	{...restProps} />
