package com.rockycifu.server.seeders;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainSeeder implements CommandLineRunner{

	private final QuestionSeeder questionSeeder;
	private final OptionSeeder optionSeeder;
	
	public MainSeeder(QuestionSeeder questionSeeder, OptionSeeder optionSeeder) {
		this.questionSeeder = questionSeeder;
		this.optionSeeder = optionSeeder;
	}
	
	@Override
	public void run(String... args) throws Exception {	
		questionSeeder.seed();
		optionSeeder.seed();
	}

}
