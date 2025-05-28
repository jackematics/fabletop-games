BINARY_NAME := fabletop-games 
OS := linux

build:
ifeq ($(OS),mac)
	GOOS=darwin GOARCH=amd64 go build -o $(BINARY_NAME) main.go
else
	GOOS=linux GOARCH=arm64 go build -o $(BINARY_NAME) main.go
endif

clean:
	rm -f $(BINARY_NAME) 

test:
	go test -v ./test/...

run:
	$(MAKE) build
	./$(BINARY_NAME)

# infrastructure

deploy-s3:
	aws cloudformation deploy \
		--template-file infrastructure/s3-template.json \
		--stack-name  FabletopGamesS3Stack \
		--capabilities CAPABILITY_NAMED_IAM 

deploy-ec2:
	aws cloudformation deploy \
		--template-file infrastructure/ec2-template.json \
		--stack-name FabletopGamesEC2Stack \
		--capabilities CAPABILITY_NAMED_IAM

delete-s3-stack:
	aws cloudformation delete-stack --stack-name FabletopGamesS3Stack

delete-ec2-stack:
	aws cloudformation delete-stack --stack-name FabletopGamesEC2Stack


.PHONY: build test clean 
