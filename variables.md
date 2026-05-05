# Wanna Design System — Variables

> Formato: [W3C Design Tokens Community Group (DTCG)](https://design-tokens.github.io/community-group/format/)
> Arquivo fonte: `variables.json`
> Modos: **Light** / **Dark**

---

## Colors

### Primary

| Token | Light | Dark |
|---|---|---|
| `primary/100` | `#FFFFFF` | `#0D0A1A` |
| `primary/200` | `#F6F4FB` | `#150F2B` |
| `primary/300` | `#E7DFF4` | `#2B1F52` |
| `primary/400` | `#A874FF` | `#A874FF` |
| `primary/500` | `#5723B0` | `#5723B0` |

### Neutral

| Token | Light | Dark |
|---|---|---|
| `neutral/100` | `#F7F6F9` | `#090127` |
| `neutral/200` | `#EAE7F1` | `#150F2B` |
| `neutral/300` | `#C7C0D4` | `#221A3C` |
| `neutral/400` | `#988DAC` | `#2B263F` |
| `neutral/500` | `#706784` | `#706784` |
| `neutral/600` | `#3F3855` | `#988DAC` |
| `neutral/700` | `#2B263F` | `#C7C0D4` |
| `neutral/800` | `#150F2B` | `#EAE7F1` |
| `neutral/black` | `#090127` | `#FFFFFF` |
| `neutral/white` | `#FFFFFF` | `#090127` |

### Semantic

| Token | Light | Dark |
|---|---|---|
| `semantic/success` | `#198F51` | `#55BC5B` |
| `semantic/success-dark` | `#55BC5B` | `#198F51` |
| `semantic/warning` | `#F59E0B` | `#F59E0B` |
| `semantic/error` | `#EA3A2E` | `#FF584D` |
| `semantic/error-dark` | `#FF584D` | `#EA3A2E` |
| `semantic/info` | `#5723B0` | `#A874FF` |
| `semantic/info-dark` | `#A874FF` | `#5723B0` |

### Support

| Token | Valor |
|---|---|
| `support/success/20` | `rgba(25, 143, 81, 0.20)` |
| `support/warning/20` | `rgba(252, 165, 18, 0.20)` |
| `support/error/20` | `rgba(234, 58, 46, 0.20)` |
| `support/yellow` | `#F5CC45` |
| `support/yellow/20` | `rgba(245, 204, 69, 0.20)` |

### Overlay

| Token | Valor |
|---|---|
| `overlay/5` | `rgba(87, 35, 176, 0.05)` |
| `overlay/10` | `rgba(87, 35, 176, 0.10)` |
| `overlay/20` | `rgba(87, 35, 176, 0.20)` |

### Gradient

| Token | Start | Mid | End |
|---|---|---|---|
| `gradient/gold` | `#F8BD4F` | `#FCFDC9` | `#F8BD4F` |
| `gradient/silver` | `#C0C0C0` | `#F6F3F6` | `#C0C0C0` |

### Accent

| Token | Light | Dark |
|---|---|---|
| `accent/light` | `#5723B0` | `#A874FF` |
| `accent/dark` | `#A874FF` | `#5723B0` |

---

## Shadow

### Bottom Sheet

| Propriedade | Light | Dark |
|---|---|---|
| `color` | `rgba(9, 1, 39, 0.25)` | `rgba(9, 1, 39, 0.80)` |
| `x` | `0px` | `0px` |
| `y` | `-10px` | `-30px` |
| `blur` | `25px` | `50px` |
| `spread` | `0px` | `0px` |

> CSS: `0px -10px 25px 0px rgba(9, 1, 39, 0.25)` / `0px -30px 50px 0px rgba(9, 1, 39, 0.80)`

### Card

| Propriedade | Light | Dark |
|---|---|---|
| `color` | `rgba(9, 1, 39, 0.25)` | `rgba(9, 1, 39, 0.70)` |
| `x` | `0px` | `0px` |
| `y` | `-10px` | `-10px` |
| `blur` | `25px` | `25px` |
| `spread` | `0px` | `0px` |

> CSS: `0px -10px 25px 0px rgba(9, 1, 39, 0.25)` / `0px -10px 25px 0px rgba(9, 1, 39, 0.70)`

---

## Spacing

| Token | Valor |
|---|---|
| `spacing/1` | `4px` |
| `spacing/2` | `8px` |
| `spacing/3` | `12px` |
| `spacing/4` | `16px` |
| `spacing/6` | `24px` |
| `spacing/8` | `32px` |
| `spacing/12` | `48px` |

---

## Radius

| Token | Valor |
|---|---|
| `radius/small` | `4px` |
| `radius/medium` | `8px` |
| `radius/large` | `12px` |
| `radius/full` | `130px` |

---

## Typography

### Font Family

| Token | Valor |
|---|---|
| `fontFamily/primary` | `Montserrat` |
| `fontFamily/condensed` | `Barlow Condensed` |

### Text Styles

| Token | Size | Weight |
|---|---|---|
| `text/xs/semibold` | `10px` | `600` |
| `text/xs/bold` | `10px` | `700` |
| `text/xs/black` | `10px` | `900` |
| `text/sm/semibold` | `11px` | `600` |
| `text/md/semibold` | `12px` | `600` |
| `text/base/semibold` | `14px` | `600` |
| `text/base/bold` | `14px` | `700` |
| `text/lg/extrabold` | `16px` | `800` |
| `text/display` | `28px` | `800` |

### Heading Styles

| Token | Size | Weight |
|---|---|---|
| `heading/h1` | `24px` | `700` |
| `heading/h2` | `16px` | `700` |
| `heading/h3` | `14px` | `600` |
| `heading/h4` | `12px` | `600` |
| `heading/h5` | `10px` | `600` |
| `heading/tab` | `18px` | `700` |
| `heading/seePicks` | `16px` | `700` |

### Montserrat Scale (Figma Text Styles)

Todos os pesos de **Regular → ExtraBold** nos tamanhos `10 · 12 · 14 · 16 · 18 · 20px`.

| | 10 | 12 | 14 | 16 | 18 | 20 |
|---|---|---|---|---|---|---|
| **Regular** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Medium** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **SemiBold** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Bold** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **ExtraBold** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## Figma — O que está no arquivo

| Item | Detalhes |
|---|---|
| **Variables — Colors** | 29 tokens + neutral/white, shadow colors, gradient stops |
| **Variables — Spacing & Radius** | 11 tokens |
| **Variables — Components** | Buttons (height, type, style, state) + shadow floats |
| **Text Styles** | 30 estilos Montserrat + 16 estilos semânticos |
| **Effect Styles** | `shadow/bottomSheet/light`, `shadow/bottomSheet/dark` |
| **Paint Styles** | `gradient/gold`, `gradient/silver` |
| **Componentes** | 19 button components na página Buttons |
| **Modos** | Light / Dark na coleção Colors |
