// icons-registry.ts
// Angular v20+ best practice: No SVG imports! Use string URLs for assets.
// https://github.com/czeckd/angular-svg-icon#usage
// https://angular.dev/guide/asset-configuration

export const ICONS = {
  'google-logo':        'assets/icons/google-logo.svg',
  // Outline heroicons
  'arrow-long-left':    'assets/icons/heroicons/outline/arrow-long-left.svg',
  'arrow-long-right':   'assets/icons/heroicons/outline/arrow-long-right.svg',
  'arrow-sm-right':     'assets/icons/heroicons/outline/arrow-sm-right.svg',
  'arrow-sm-up':        'assets/icons/heroicons/outline/arrow-sm-up.svg',
  'bell':               'assets/icons/heroicons/outline/bell.svg',
  'bookmark':           'assets/icons/heroicons/outline/bookmark.svg',
  'chart-pie':          'assets/icons/heroicons/outline/chart-pie.svg',
  'cog-6-tooth':        'assets/icons/heroicons/outline/cog-6-tooth.svg',
  'cog':                'assets/icons/heroicons/outline/cog.svg',
  'cube':               'assets/icons/heroicons/outline/cube.svg',
  'cursor-click':       'assets/icons/heroicons/outline/cursor-click.svg',
  'dots-horizontal':    'assets/icons/heroicons/outline/dots-horizontal.svg',
  'download':           'assets/icons/heroicons/outline/download.svg',
  'ellipsis-vertical':  'assets/icons/heroicons/outline/ellipsis-vertical.svg',
  'exclamation-triangle':'assets/icons/heroicons/outline/exclamation-triangle.svg',
  'eye-off':            'assets/icons/heroicons/outline/eye-off.svg',
  'eye':                'assets/icons/heroicons/outline/eye.svg',
  'folder':             'assets/icons/heroicons/outline/folder.svg',
  'gift':               'assets/icons/heroicons/outline/gift.svg',
  'information-circle': 'assets/icons/heroicons/outline/information-circle.svg',
  'lock-closed':        'assets/icons/heroicons/outline/lock-closed.svg',
  'logout':             'assets/icons/heroicons/outline/logout.svg',
  'magnifying-glass':   'assets/icons/heroicons/outline/magnifying-glass.svg',
  'menu':               'assets/icons/heroicons/outline/menu.svg',
  'minus':              'assets/icons/heroicons/outline/minus.svg',
  'moon':               'assets/icons/heroicons/outline/moon.svg',
  'plus':               'assets/icons/heroicons/outline/plus.svg',
  'refresh':            'assets/icons/heroicons/outline/refresh.svg',
  'shield-check':       'assets/icons/heroicons/outline/shield-check.svg',
  'shield-exclamation': 'assets/icons/heroicons/outline/shield-exclamation.svg',
  'sun':                'assets/icons/heroicons/outline/sun.svg',
  'user-circle':        'assets/icons/heroicons/outline/user-circle.svg',
  'users':              'assets/icons/heroicons/outline/users.svg',
  'view-grid':          'assets/icons/heroicons/outline/view-grid.svg',
  'x':                  'assets/icons/heroicons/outline/x.svg',
  // Solid heroicons
  'chevron-double-left':'assets/icons/heroicons/solid/chevron-double-left.svg',
  'chevron-right':      'assets/icons/heroicons/solid/chevron-right.svg',
  'play':               'assets/icons/heroicons/solid/play.svg',
  // Other
  'logo':               'assets/icons/logo.svg',
  // Tabler icons
  'arrows-shuffle-2':   'assets/icons/tablericons/arrows-shuffle-2.svg',
  'headphones':         'assets/icons/tablericons/headphones.svg',
  'player-skip-back-filled':'assets/icons/tablericons/player-skip-back-filled.svg',
  'player-skip-forward-filled':'assets/icons/tablericons/player-skip-forward-filled.svg',
  'repeat':             'assets/icons/tablericons/repeat.svg',
  'text-direction-ltr': 'assets/icons/tablericons/text-direction-ltr.svg',
  'text-direction-rtl': 'assets/icons/tablericons/text-direction-rtl.svg',
} as const;

export type IconName = keyof typeof ICONS;

export function getIconPath(name: IconName): string {
  return ICONS[name];
}
