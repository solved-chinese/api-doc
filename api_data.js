define({ "api": [
  {
    "type": "POST",
    "url": "/learning/start_learning/",
    "title": "Start Learning",
    "description": "<p>Start Learning, this should be done with an actual form submission</p>",
    "group": "learning",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "uc_tags_filter",
            "description": "<p>the ids of UserCharacterTags to INCLUDE</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "learning/review.html",
          "content": "context dictionary:\n'choices': a list of 4 strings\n'question': string of the question\n\nDisplay the question and choices with no next button\nAfter the user selects an answer, ajax POST to the same url with following args:\n    'user_answer': integer with range [0, 4), representing user's answer\nThe server responds with 'correct_answer', which is in the same range,\n    display the result, provide next button, and when the user clicks next, \n    submit GET request with no args\nrefer to old master review page for how to do specific things\n    https://github.com/chenyx512/jiezi/blob/old-master/jiezi/templates/learning/review_interface.html",
          "type": "json"
        },
        {
          "title": "learning/display_character.html:",
          "content": "There shouldn't be any ajax in this\nIn context dictionary, if 'is_next', provide an next button that submits\n    GET form to original url, otherwise keep the next button the same as before",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "jiezi/learning/views.py",
    "groupTitle": "learning",
    "name": "PostLearningStart_learning"
  }
] });
