# Typography

Atlas ’s primary typeface is Myriad Pro

The typeface is used at various weights, primarily Regular (400) and Medium (500). As a general rule, it is best to avoid Light (300) or lighter weights to ensure optimum legibility.

## Headings
All headlines are set in Graphik Medium (500) and have letter-spacing set to -0.35px.

## Content

Paragraphs are set in Graphik Regular (400).


This is a code specimen:

```code
function identity(x) {
  return x;
}
```

```type
{
  "headings": [98,28,21,16,14,12],
  "font": "sans-serif",
  "color": "#00263e"
}
```


```type|span-3,kern,smoothen,single
{
    "headings": [42],
    "background": "#ff5555",
    "color": "#fff",
    "font": "sans-serif",
    "weight": 600,
    "tracking": -3
}
```

```type|span-4,kern,smoothen
[
    {
        "headings": [42],
        "background": "#f5f5f5",
        "color": "#efefef",
        "font": "sans-serif"
    }
]
```

```hint|span-2,warning
Does not pass any tests.
```

```type|span-4,kern,smoothen
[
    {
        "headings": [42],
        "background": "#f5f5f5",
        "color": "#888",
        "font": "sans-serif"
    }
]
```

```hint|span-2,directive
Passes Level **AA** for large text
```


```type|span-4,kern,smoothen,shorter
[
    {
        "headings": [42],
        "paragraphs": ["14/24"],
        "background": "#f5f5f5",
        "color": "#333",
        "font": "sans-serif"
    }
]
```

```hint|span-2,directive
Passes Level **AAA** even for small text
```