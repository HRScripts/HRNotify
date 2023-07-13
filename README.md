# HRNotify
Notification resource made by HRScripts | hristiyan_raykov#0 and astronomichniq#0 for HRScripts resources.

## Installation
- Put `HRNotify` in your `resources` folder
- Put `start HRNotify` in your `server.cfg` file
- Start resource & enjoy

## Client Application
- `Notify` export sending message in custom UI
- Using export example:
```lua
RegisterCommand('success', function()
  local msg = 'Hi! I am HRScripts' -- String argument for choice of the notify text
  local type = 'info' -- String argument for choice of the type of notify. Types: success, info, error, warning
  local time = 2500 -- Int/Number argument to select the remaining time before the notification closes

  exports.HRNotify:Notify(msg, type, time)
end, false)
```

## Event
- `HRNotify:Notify` same function like `Notify` export
