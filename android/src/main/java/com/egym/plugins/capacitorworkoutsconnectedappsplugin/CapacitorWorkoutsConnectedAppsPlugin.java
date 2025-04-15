package com.egym.plugins.capacitorworkoutsconnectedappsplugin;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorWorkoutsConnectedApps")
public class CapacitorWorkoutsConnectedAppsPlugin extends Plugin {

    private CapacitorWorkoutsConnectedApps implementation = new CapacitorWorkoutsConnectedApps();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public isConnectedAppsEnabled(PluginCall call) {
        boolean isEnabled = implementation.isConnectedAppsEnabled();
        JSObject ret = new JSObject();
        ret.put("isEnabled", isEnabled);

        //implement more logic here

        call.resolve(ret);
    }

    @PluginMethod
    public saveWorkoutToConnectedApps(PluginCall call) {
        JSObject workout = call.getObject("workout");
        if (!call.getData().has("id")) {
            call.reject("Must provide an id");
            return;
        }

        //implement more logic here

        JSObject ret = new JSObject();
        ret.put("savedSuccessfully", true);
        call.resolve(ret);
    }
    
}
