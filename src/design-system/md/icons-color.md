```tsx
import { Close } from '@tazalov/kebab-ui/icons'

// ...

return <Close style={{ color: 'red' }}/>

```

```scss
// icon-styles.module.scss

.close {
  color: red;
}
```

```tsx
import { Close } from '@tazalov/kebab-ui/icons'
import s from 'icon-styles.module.scss'

// ...

return <Close className={s.close}/>

```
