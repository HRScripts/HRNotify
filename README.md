# HRNotify V2
Notification resource made by HRScripts Development for HRScripts resources.
See documentation: https://hrscripts.gitbook.io/hrscripts-documentation

https://github.com/HRScripts/HRNotify/assets/138999193/ed8e0686-6db5-4ca9-a36e-8784a5ff0297

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
