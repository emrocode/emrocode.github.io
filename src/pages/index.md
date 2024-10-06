---
layout: layouts/base.vto
templateEngine: [vto]
---

{{ set prefix = "section_" }}
{{ include `components/sections/${prefix}hero.vto` }}
{{ include `components/sections/${prefix}skills.vto` }}
{{ include `components/sections/${prefix}projects.vto` }}
{{ include `components/sections/${prefix}actv.vto` }}
