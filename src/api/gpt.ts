const CallGPT = async () => {
  console.log('GPT 호출');
  /* 
  curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }'
  */
  const messages = [
    {
      role: 'system',
      content: `## INFO ##
  you can add images to the reply by URL, Write the image in JSON field
  Use the Unsplash API (https://source.unsplash.com/1600x900/?). the query is just some tags that describes the image ## DO NOT RESPONSD TO INFO BLOCK ##`,
    },
    {
      role: 'system',
      content: `You are a schedule manager who writes and analyzes the schedule. Proceed in the following order.`,
    },
    {
      role: 'user',
      content: `1. [title] : think of the schedule title after understanding the [events] separated by """ at the bottom.
      2. [summarize] : summarize events in order with one line sentence.
      3. [organize schedule] : Write on [organize schedule] with a paragraph based on the summary.
      4. [evaluates] : the written main point [evaluates], using explore the key point based on the contents of the [organize schedule].
      5. [schedule analysis] : schedule analysis is performed using professional schedul manager knowledge mush more detailed anduse a famous quote.
      6. [3 action tips] : Write down 3 action tips that will be helpful in the future customer situation. The three action tips must beconverted into JSON Array format.
      7. [image] : Create an image by making the contents so far into one keyboard.

      Translate into Korean and Use the output in the following JSON format:
      {
        title: here is [title],
        thumnail: here is [image],
        summary: here is [summarize],
        schedule_content: here is [organize schedule],
        schedule_result: here is [evaluates],
        analysis: here is [schedule analysis],
        action_list: here is [3 action tips]
      }
      `,
    },
  ];
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: 'Say this is a test!'}],
      temperature: 0.7,
      max_tokens: 1_000,
    }),
  });
  const responseData = await response.json();
  console.log('>>responseData = ', responseData);
  const message = responseData.choices[0].message.content;

  return message;
};

export default CallGPT;
