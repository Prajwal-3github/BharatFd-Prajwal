import { connectToDB } from "@/lib/dbConnect";
import FAQ from "@/models/FaqModel";
import { JSDOM } from "jsdom";
import { translateFromGoogle } from "@/lib/utils";

export async function GET(req) {
  const parseHtml = async (html, lang) => {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const walker = document.createTreeWalker(
      document.body,
      dom.window.NodeFilter.SHOW_TEXT
    );
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeValue.trim()) {
        const text = await translateFromGoogle(node.nodeValue, lang);

        node.nodeValue =  text
      }
    }
    // console.log(document.body.innerHTML);
    return document.body.innerHTML.toString();
  };
  await connectToDB();

  try {
  const faqs = await FAQ.find();
  const { searchParams } = new URL(req.url);
  let newFaq = [];
  const lang = searchParams.get("lang") || "en";
  for (let faq of faqs) {
    newFaq.push({
      question: await parseHtml(faq.question, lang),
      answer: await parseHtml(faq.answer, lang),
    });
    
  }
//   console.log(newFaq);
  return new Response(JSON.stringify(newFaq), { status: 200 });
  } catch (error) {
      return new Response("Internal Server Error", { status: 500 });
  }
}

export async function POST(req) {
  await connectToDB();
  const { question, answer } = await req.json();

  try {
    const newFAQ = new FAQ({ question, answer });
    await newFAQ.save();
    return new Response(JSON.stringify(newFAQ), { status: 201 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
