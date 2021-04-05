package com.fullstack.rps.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="winning_sequence")
public class WinningSequence implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "value")
    private int value;
    public WinningSequence()
    {
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }



}
