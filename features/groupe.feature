Feature: Groupe actions
  I will test the group creation

  Background:
    Given there is a server and a client
    Given there is a memberList with 4 members
  Scenario: I should create a group with members
    When I POST a group
    Then I receive a 200 status code
