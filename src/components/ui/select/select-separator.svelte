<script lang="ts">
import { Separator } from '$components/ui/separator/index.js';
import { cn } from '$utils/utils.ts';

import type { Separator as SeparatorPrimitive } from 'bits-ui';

let { ref = $bindable(null), class: className, ...restProps }: SeparatorPrimitive.RootProps = $props();
</script>

<Separator
	bind:ref="{ref}"
	class="{cn('-mx-1 my-1 h-px bg-muted', className)}"
	{...restProps} />
