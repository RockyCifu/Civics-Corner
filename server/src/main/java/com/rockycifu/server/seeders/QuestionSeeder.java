package com.rockycifu.server.seeders;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import org.springframework.stereotype.Component;

import com.rockycifu.server.models.Answer;
import com.rockycifu.server.models.Question;
import com.rockycifu.server.services.AnswerService;
import com.rockycifu.server.services.QuestionService;

@Component
public class QuestionSeeder {

	private final QuestionService questionService;
	private final AnswerService answerService;
	
	public QuestionSeeder(QuestionService questionService, AnswerService answerService) {
		this.questionService = questionService;
		this.answerService = answerService;
	}
	
	public void seed() {
		if(!questionService.findAll().isEmpty()) {
			return;
		}
		
		try(Scanner scanner = new Scanner(new File("src/main/resources/db/questions-list.txt"))){
			while(scanner.hasNext()) {
				String[] str = scanner.nextLine().split(";");
				Question question = persistQuestion(str[0]);
				for(int i = 1; i < str.length; i++) {
					persistAnswer(str[i], question);
				}			
			}
			
		} catch (FileNotFoundException ex) {
			ex.printStackTrace();
		}
	}
	
	private Question persistQuestion(String text) {
		Question question = new Question();
		question.setText(text);
		return questionService.persistOne(question);
	}
	
	private void persistAnswer(String text, Question question) {
		Answer answer = new Answer();
		answer.setText(text);
		answer.setQuestion(question);
		answerService.persistOne(answer);
	}
}
