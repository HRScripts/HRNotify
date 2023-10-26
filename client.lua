local function Notify(msg, type, time)
    if not type then
        type = 'info'
    elseif not msg then
        msg = 'Text'
    elseif not time then
        time = 1500
    end

    -- We send the notification location to JavaScript
    SendNUIMessage({
        text = msg,
        type = type,
        time = time,
        position = Config.DefaultNotificationPosition, -- We use the submitted position value
    })
end

if Config.EnableTestCmds then
    RegisterCommand('success', function() Notify('This is HRNotify Welcome :)', 'success', 2500) end)
    RegisterCommand('info', function() Notify('This is HRNotify Welcome :)', 'info', 2500) end)
    RegisterCommand('error', function() Notify('This is HRNotify Welcome :)', 'error', 2500) end)
    RegisterCommand('warning', function() Notify('This is HRNotify Welcome :)', 'warning', 2500) end)
end

-- We are registering the functions that will work with the notifications
exports('Notify', function(msg, type, time) Notify(msg, type, time) end)
RegisterNetEvent('HR:Notify', function(msg, type, time) Notify(msg, type, time) end)