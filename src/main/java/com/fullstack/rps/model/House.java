package com.fullstack.rps.model;


public class House {
    public House(String value)
    {
        this.value=value;
    }
    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    private String value;
}
