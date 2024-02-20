package io.acme.securecoding.module2;

import java.io.ObjectStreamException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.regex.Pattern;

//public final class Person {
public final class Person implements Cloneable, Serializable {
    private static final Pattern ALLOWLIST = Pattern.compile("[A-Za-z'\\-]+");

    private static final Pattern BLOCKLIST = Pattern.compile("<>\\(\\)\\[\\]\\\\/\\s\\$");

    private final String name;
    private final Integer age;
    private final Collection<String> shirts;

    public Person(String name, Integer age, Collection<String> shirts) {
//    private Person(String name, Integer age) {
        if (age < 13)
            throw new IllegalArgumentException("invalid age");
        if (age > 120)
            throw new IllegalArgumentException("invalid age");

//        if (BLOCKLIST.matcher(name).matches()) {
        if (!ALLOWLIST.matcher(name).matches()) {
            throw new IllegalArgumentException("invalid age");
        }
        this.name = name;
        this.age = age;
//        this.shirts = shirts;
        this.shirts = new ArrayList<>(shirts);
    }

    public Person(Person p) {
        this(p.name, p.age, p.shirts);
    }

    public final boolean mayDriveACar() {
        return this.age >= 16;
    }

    Integer getAge() {
        return age;
    }

    Integer getShirtcount() {
        return shirts.size();
    }

    Iterator<String> getShirts() {
        return shirts.iterator();
    }

    Collection<String> getShirtList() {
        return Collections.unmodifiableCollection(this.shirts);
    }

    void addShirt(String shirt) {
        shirts.add(shirt);
    }

    @Override
    public Person clone() throws CloneNotSupportedException {
//        return (Person) super.clone();
        return new Person(name, age, shirts);
    }

    public Object readResolve() throws ObjectStreamException {
        return new Person(this);
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", shirts=" + shirts +
                '}';
    }
}
