#!/usr/bin/ruby
require 'json'
require 'date'

root = p Dir.getwd
blog_root = './public/works'

Dir.chdir(blog_root)
years = Dir.glob('*')
dict = {}
array = []

years.each { |year|
  dict[year] = {}
  Dir.chdir("./#{year}")
  months = Dir.glob('*')
  months.each { |month|
    Dir.chdir("./#{month}")
    mds = Dir.glob('*.md').map { |name|
      temp = name.split("!!")
      day = temp.first
      title = temp[1].split(".md").first
      {
        :path => "/#{year}/#{month}/#{name}",
        :year => year,
        :month => month,
        :day => day,
        :title => title,
        :filename => name,
        :date => Date.new(year.to_i,month.to_i,day.to_i)
      }
    }
    dict[year][month] = mds
    mds.each { |md| array.push md }

    Dir.chdir('../')
  }
  Dir.chdir('../')
}

outputPathAbs = root + '/public/works_tree.json'
oputputArrayPathAbs = root +'/public/works_list.json'

File.open(outputPathAbs, "wb+:UTF-8") { |out|
  out.write JSON.pretty_generate(dict)
}

array.sort! { |a,b|
  a[:date] <=> b[:date]
}.reverse!

File.open(oputputArrayPathAbs, "wb+:UTF-8") { |out|
  out.write JSON.pretty_generate(array)
}

puts dict.to_json