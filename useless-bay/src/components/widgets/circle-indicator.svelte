<script type="ts">
  export let size: string = 'medium';
  export let defaultColor: string = 'rgba(255,255,255,0.15)';
  export let activeColor: string;
  export let isActive: boolean;

  const sizes = {
    large: '38',
    medium: '28',
    small: '22',
  }

  let diameter = sizes[size];
  let radius = diameter / 2;
  let fill = isActive ? activeColor : defaultColor;
</script>

<svg class="m-1" height={diameter + "px"} width={diameter + "px"}>
  <circle cx={radius} cy={radius} r={radius} fill={fill} />
</svg>