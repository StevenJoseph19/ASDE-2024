package io.acme.securecoding.module2;

import org.junit.jupiter.api.Test;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputFilter;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.Collection;

class PersonTest {
	static {
		ObjectInputFilter.Config.setSerialFilter((info) -> {
			Class<?> clazz = info.serialClass();
			if (clazz == null) {
				return ObjectInputFilter.Status.ALLOWED;
			}
			if (String.class.isAssignableFrom(clazz)) {
				return ObjectInputFilter.Status.ALLOWED;
			}
			if (ArrayList.class.isAssignableFrom(clazz)) {
				return ObjectInputFilter.Status.ALLOWED;
			}
			if (Number.class.isAssignableFrom(clazz)) {
				return ObjectInputFilter.Status.ALLOWED;
			}
			if (Person.class.isAssignableFrom(clazz)) {
				return ObjectInputFilter.Status.ALLOWED;
			}
			return ObjectInputFilter.Status.REJECTED;
		});
	}
	@Test
	void testImmutability() {
		Collection<String> shirts = new ArrayList<>();
		shirts.add("blue");
		shirts.add("green");
		Person p = new Person("dave", 23, shirts);
		System.out.println(p);
		shirts.add("red");
		System.out.println(p);
	}

	@Test
	void testEncapsulation() throws CloneNotSupportedException {
		Collection<String> shirts = new ArrayList<>();
		shirts.add("blue");
		shirts.add("green");
		Person a = new Person("dave", 23, shirts);
		Person b = a.clone();
		System.out.println(b);
		a.addShirt("red");
		System.out.println(a);
		System.out.println(b);
	}

	
}