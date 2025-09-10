import { PrismaClient, Quote } from "#generated/prisma/index.js";

const prisma = new PrismaClient();

const allQuotes = [
  {"text": "Life isn't about getting and having, it's about giving and being.", "author": "Kevin Kruse"},
  {"text": "Whatever the mind of man can conceive and believe, it can achieve.", "author": "Napoleon Hill"},
  {"text": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein"},
  {"text": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "author": "Robert Frost"},
  {"text": "I attribute my success to this: I never gave or took any excuse.", "author": "Florence Nightingale"},
  {"text": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky"},
  {"text": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "author": "Michael Jordan"},
  {"text": "The most difficult thing is the decision to act, the rest is merely tenacity.", "author": "Amelia Earhart"},
  {"text": "Every strike brings me closer to the next home run.", "author": "Babe Ruth"},
  {"text": "Definiteness of purpose is the starting point of all achievement.", "author": "W. Clement Stone"},
  {"text": "We must balance conspicuous consumption with conscious capitalism.", "author": "Kevin Kruse"},
  {"text": "Life is what happens to you while you’re busy making other plans.", "author": "John Lennon"},
  {"text": "We become what we think about.", "author": "Earl Nightingale"},
  {"text": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.", "author": "Mark Twain"},
  {"text": "Life is 10% what happens to me and 90% of how I react to it.", "author": "Charles Swindoll"},
  {"text": "The most common way people give up their power is by thinking they don’t have any.", "author": "Alice Walker"},
  {"text": "The mind is everything. What you think you become.", "author": "Buddha"},
  {"text": "The best time to plant a tree was 20 years ago. The second best time is now.", "author": "Chinese Proverb"},
  {"text": "An unexamined life is not worth living.", "author": "Socrates"},
  {"text": "Eighty percent of success is showing up.", "author": "Woody Allen"},
  {"text": "Your time is limited, so don't waste it living someone else's life.", "author": "Steve Jobs"},
  {"text": "Winning isn't everything, but wanting to win is.", "author": "Vince Lombardi"},
  {"text": "I am not a product of my circumstances. I am a product of my decisions.", "author": "Stephen R. Covey"},
  {"text": "Every child is an artist. The problem is how to remain an artist once we grow up.", "author": "Pablo Picasso"},
  {"text": "You can never cross the ocean until you have the courage to lose sight of the shore.", "author": "Christopher Columbus"},
  {"text": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
  {"text": "If you can dream it, you can do it.", "author": "Walt Disney"},
  {"text": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius"},
  {"text": "Our lives begin to end the day we become silent about things that matter.", "author": "Martin Luther King Jr."},
  {"text": "The best revenge is massive success.", "author": "Frank Sinatra"},
  {"text": "Life shrinks or expands in proportion to one's courage.", "author": "Anaïs Nin"},
  {"text": "In the end, we will remember not the words of our enemies, but the silence of our friends.", "author": "Martin Luther King Jr."},
  {"text": "To live is the rarest thing in the world. Most people exist, that is all.", "author": "Oscar Wilde"},
  {"text": "Good friends, good books, and a sleepy conscience: this is the ideal life.", "author": "Mark Twain"},
  {"text": "I have not failed. I've just found 10,000 ways that won't work.", "author": "Thomas Edison"},
  {"text": "A friend is someone who knows all about you and still loves you.", "author": "Elbert Hubbard"},
  {"text": "It is never too late to be what you might have been.", "author": "George Eliot"},
  {"text": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
  {"text": "Tell me who admires and loves you, and I will tell you who you are.", "author": "Antoine de Saint-Exupéry"},
  {"text": "Do not go where the path may lead, go instead where there is no path and leave a trail.", "author": "Ralph Waldo Emerson"},
  {"text": "Life is really simple, but we insist on making it complicated.", "author": "Confucius"},
  {"text": "May you live all the days of your life.", "author": "Jonathan Swift"},
  {"text": "Life itself is the most wonderful fairy tale.", "author": "Hans Christian Andersen"},
  {"text": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", "author": "Ralph Waldo Emerson"},
  {"text": "Life is ours to be spent, not to be saved.", "author": "D. H. Lawrence"},
  {"text": "The way to get started is to quit talking and begin doing.", "author": "Walt Disney"},
  {"text": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson"},
  {"text": "You don't have to be great to start, but you have to start to be great.", "author": "Zig Ziglar"},
  {"text": "Everything you can imagine is real.", "author": "Pablo Picasso"},
  {"text": "Do one thing every day that scares you.", "author": "Eleanor Roosevelt"},
  {"text": "The only limit to our realization of tomorrow is our doubts of today.", "author": "Franklin D. Roosevelt"},
  {"text": "Creativity is intelligence having fun.", "author": "Albert Einstein"},
  {"text": "Life is what we make it, always has been, always will be.", "author": "Grandma Moses"},
  {"text": "The longer I live, the more I realize the impact of attitude on life. Attitude, to me, is more important than facts. It is more important than the past, than education, than money, than circumstances, than failures, than successes, than what other people think or say or do. It is more important than appearance, giftedness, or skill. It will make or break a company...a church...a home. The remarkable thing is we have a choice every day regarding the attitude we will embrace for that day. We cannot change our past...we cannot change the fact that people will act in a certain way. We cannot change the inevitable. The only thing we can do is play on the one string we have, and that is our attitude...I am convinced that life is 10% what happens to me and 90% how I react to it. And so it is with you...we are in charge of our attitudes.", "author": "Charles R. Swindoll"},
  {"text": "You can't use up creativity. The more you use, the more you have.", "author": "Maya Angelou"},
  {"text": "If you want to live a happy life, tie it to a goal, not to people or things.", "author": "Albert Einstein"},
  {"text": "In three words I can sum up everything I've learned about life: it goes on.", "author": "Robert Frost"},
  {"text": "Love the life you live. Live the life you love.", "author": "Bob Marley"},
  {"text": "Life is either a daring adventure or nothing at all.", "author": "Helen Keller"},
  {"text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "author": "Ralph Waldo Emerson"},
  {"text": "Life is too important to be taken seriously.", "author": "Oscar Wilde"},
  {"text": "The best way to predict your future is to create it.", "author": "Abraham Lincoln"},
  {"text": "You only live once, but if you do it right, once is enough.", "author": "Mae West"},
  {"text": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill"},
  {"text": "It is better to be hated for what you are than to be loved for what you are not.", "author": "André Gide"},
  {"text": "Life is really simple, but we insist on making it complicated.", "author": "Confucius"},
  {"text": "Life is what happens when you're busy making other plans.", "author": "John Lennon"},
  {"text": "You have within you right now, everything you need to deal with whatever the world can throw at you.", "author": "Brian Tracy"},
  {"text": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
  {"text": "The only impossible journey is the one you never begin.", "author": "Tony Robbins"},
  {"text": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", "author": "Ralph Waldo Emerson"},
  {"text": "Life is 10% what happens to me and 90% how I react to it.", "author": "Charles R. Swind"}]
 


async function main(){
    const quotes = await prisma.quote.createMany({
        data:allQuotes,
        skipDuplicates:true
    },)
}

main()
.catch(e=>{
    console.log(e);
    process.exit(1);
})
.finally(async()=>{
    await prisma.$disconnect();
})