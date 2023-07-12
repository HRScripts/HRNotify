function Notify(msg, type, time)
    if not type then
        type = 'info'
    elseif not msg then
        msg = 'Text'
    elseif not time then
        time = 1500
    end

    SendNUIMessage({
        text = msg,
        type = type,
        time = time
    })
end

-- Registering Export & Event
exports('Notify', function(msg, type, time) Notify(msg, type, time) end)
RegisterNetEvent('HR:Notify', function(msg, type, time) Notify(msg, type, time) end)