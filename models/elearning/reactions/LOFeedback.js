var keystone = require('keystone');
var Types = keystone.Field.Types;

var LOFeedback = new keystone.List('LOFeedback', {
  nocreate: true,
  track: true,
});

LOFeedback.add({
  feedbackType: { 
    type: Types.Select, 
    options: [
      { value: 'message', label: "Just leaving a message" },
      { value: 'question', label: "I've got a question" },
      { value: 'other', label: "Something else..." },
    ], required: true },
  message: { 
    type: Types.Textarea, 
    required: true 
  },
});

LOFeedback.track = true;
LOFeedback.defaultSort = '-createdAt';
LOFeedback.defaultColumns = 'name, email, enquiryType, createdAt';
LOFeedback.register();
