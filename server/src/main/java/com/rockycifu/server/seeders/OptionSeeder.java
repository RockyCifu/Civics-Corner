package com.rockycifu.server.seeders;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import org.springframework.stereotype.Component;

import com.rockycifu.server.models.Option;
import com.rockycifu.server.models.Question;
import com.rockycifu.server.services.OptionService;
import com.rockycifu.server.services.QuestionService;

@Component
public class OptionSeeder {

	private final QuestionService questionService;
	private final OptionService optionService;
	
	public OptionSeeder(QuestionService questionService, OptionService optionService) {
		this.questionService = questionService;
		this.optionService = optionService;
	}
	
	
	public void seed() {
		if(!optionService.findAll().isEmpty()) {
			return;
		}
		
		try(Scanner scanner = new Scanner(new File("src/main/resources/db/options-list.txt"))){
			for(long i = 1; i <= 100; i++) {
				Question question = questionService.findOne(i);
				persistOptions(scanner.nextLine(), question);
			}
		} catch (FileNotFoundException ex) {
			ex.printStackTrace();
		}
	}
	
	private void persistOptions(String optionsString, Question question) {
		String[] options = optionsString.split(";");
		for(String text : options) {
			Option option = new Option();
			option.setText(text);
			option.setQuestion(question);
			optionService.persistOne(option);
		}
	}
}
