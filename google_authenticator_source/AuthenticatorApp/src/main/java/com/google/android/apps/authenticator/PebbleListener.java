package com.google.android.apps.authenticator;

//https://guides.codepath.com/android/Creating-Custom-Listenershttps://guides.codepath.com/android/Creating-Custom-Listeners
public class PebbleListener {

    //this variables represents the listener passed in by the owning object
    //the listener must implement the events interface and pass messages to parent
    private PebbleListenerInterface listener;

    //constructor where listener events are ignored
    public PebbleListener() {
        //set null or default listener or accept as argument to constructor
        this.listener = null;
    }

    //assign the listener implementing events interface that will receive the events
    public void setPebbleListenerInterface(PebbleListenerInterface listener) {
        this.listener = listener;
    }

    //this interface defines the type of messages I want to communicate
    public interface PebbleListenerInterface {

        //these methods are the different events and need
        //to pass relevant arguments related to the event
        public void onObjectReady(String title);

        //this if for when data is already loaded
        public void onDataLoaded(SomeData data);
    }
}
