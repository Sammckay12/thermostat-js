
 def fizzbuzz(num)
 	array = []
 	0.upto(num) { |n|  array.push(n) }
 	array.each do |x|

 			if x % 3 == 0
 				puts "fizz"
        if x % 5 == 0
          puts "fizzbuzz"
        end

 			elsif x % 5 == 0
 				puts "buzz"
        if x % 3 == 0
          puts "fzzbuzz"
        end
 			else
				puts x
 			end
 	end
 	print array
 end

 fizzbuzz(15)
