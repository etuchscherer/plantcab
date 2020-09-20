<script type="ts">
  export let size;
  export let fill;
  export let isActive;

  const sizes = {
    large: '38',
    small: '22',
  }

  let diameter = sizes[size];
  let radius = diameter / 2;
  fill = isActive ? fill : 'rgba(255,255,255,0.15)';
</script>

<svg class="m-1" height={diameter + "px"} width={diameter + "px"}>
  <circle cx={radius} cy={radius} r={radius} fill={fill} />
</svg>