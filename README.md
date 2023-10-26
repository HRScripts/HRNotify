# HRNotify V2
Notification resource made by HRScripts Development for HRScripts resources.
See documentation: https://hrscripts.gitbook.io/hrscripts-documentation

<iframe width="560" height="315" src="https://www.youtube.com/embed/Zc9DOo_HTxI?si=QOQ44KXZ9cgfnMxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Installation
- Put `HRNotify` in your `resources` folder
- Put `start HRNotify` in your `server.cfg` file
- Start the script

## Client Application
- `Notify` sending message in custom UI
- Using export example:
```lua
RegisterCommand('success', function()
  local msg = 'Hi! I am HRScripts' -- String argument for choice of the notify text
  local type = 'info' -- String argument for choice of the type of notify. Types: success, info, error, warning
  local time = 2500 -- Int/Number argument to select the remaining time before the notification closes

  exports.HRNotify:Notify(msg, type, time)
end, false)
```

## Client Event
- `HR:Notify` same as `Notify` client application
