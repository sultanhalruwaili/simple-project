export default defineAppConfig({
  ui: {
    primary: 'theme-color',
    gray: 'neutral',
    container: {
      constrained: "max-w-[1460px]"
    },
    avatar:{
      background: 'bg-gray-100 dark:bg-primary-800',
    },
    modal: {
      base: "overflow-visible",
      background: 'bg-white dark:bg-primary-950',
    },
    slideover: {
      overlay: {
        background: 'bg-primary-900/75 dark:bg-gray-800/75'
      }
    },
    formGroup: {
      base: 'font-noto',
      error : "text-xs text-red-500 dark:text-red-400",
      label: {
        "base": 'text-xs block font-bold text-gray-700 dark:text-gray-200'
      }
    },
    card: {
      shadow: '',
      background: 'bg-white dark:bg-primary-950',
      ring: 'ring-1 ring-gray-200 dark:ring-primary-800',
      base: ''
    },
    input: {
      color: {
        white : {
          outline: "dark:bg-primary-900 shadow-none ring-gray-300/80 dark:ring-primary-800"
        }
      }
    },
    select: {
      color: {
        white : {
          outline: "dark:bg-primary-900 shadow-none ring-gray-300/80 dark:ring-primary-800"
        }
      }
    },
    textarea: {
      color: {
        white : {
          outline: "dark:bg-primary-900 shadow-none ring-gray-300/80 dark:ring-primary-800"
        }
      }
    },
    selectMenu: {

    },
    table: {
      base: 'min-w-full table-fixed',
      divide: 'divide-y divide-gray-100 dark:divide-primary-800',
      tbody: 'divide-y divide-gray-100 dark:divide-primary-800',
      default: {
        sortButton: {
          icon: 'i-solar-sort-vertical-outline print:hidden',
        }
      },
      tr: {
        base : 'transition hover:bg-gray-50/40 dark:hover:bg-primary-800/40',
      },
      th: {
        padding: "py-4 px-3",
        size: "text-sm",
        font: "font-medium",
      },
      td:{
        base: 'truncate ',
        padding: "print:px-0 print:py-0 px-3 py-4",
      },
      checkbox: {
        padding : 'ps-4 print:hidden',
      }
    }
  }
})
